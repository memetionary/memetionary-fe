import useToast from '@/hooks/useToast';

export interface ShareContents {
  title: string;
  text?: string;
  imageUrl?: string;
}

const useShare = (contents: ShareContents) => {
  const { toast } = useToast();

  /* URL 공유 */
  const handleCopyShare = async () => {
    const URL = window.location.href;

    const canUseShareApi =
      typeof window !== 'undefined' &&
      window.navigator.canShare &&
      window.navigator.canShare({ title: contents.title, text: contents.text });

    if (!canUseShareApi) {
      window.navigator.clipboard.writeText(URL).then(() => {
        toast.success('링크가 복사되었습니다!');
      });

      return;
    }

    window.navigator.share({ title: contents.title, text: contents.text });
    toast.success('링크가 복사되었습니다!');
  };

  const handleKakaoFeedShare = async ({ buttonsTitle }: { buttonsTitle: string }) => {
    const URL = window.location.href;

    window.Kakao.Link.sendDefault({
      objectType: 'feed',
      content: {
        title: contents.title,
        description: contents.text,
        imageUrl: contents.imageUrl || '',
        link: {
          mobileWebUrl: URL,
          webUrl: URL,
        },
      },
      buttons: [
        {
          title: buttonsTitle,
          link: {
            mobileWebUrl: URL,
            webUrl: URL,
          },
        },
      ],
      installTalk: true,
    });
  };

  const handleKakaoTemplateShare = async <T>(templateId: number, templateArgs: T) => {
    window.Kakao.Share.sendCustom({
      templateId,
      templateArgs,
    });
  };

  /* X(트위터) 공유 */
  const handleXShare = ({ preText = '' }: { preText?: string }) => {
    const URL = window.location.href;
    const shareURL = `https://X.com/intent/tweet?via=밈셔너리&text=${preText}\n${contents.title}&url=${encodeURIComponent(URL)}`;
    window.open(shareURL);
  };

  return { handleCopyShare, handleKakaoFeedShare, handleKakaoTemplateShare, handleXShare };
};

export default useShare;
