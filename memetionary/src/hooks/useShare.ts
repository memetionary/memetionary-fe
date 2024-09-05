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
      typeof window !== 'undefined' && window.navigator.canShare && window.navigator.canShare(contents);

    // if (!canUseShareApi) {
    window.navigator.clipboard.writeText(URL).then(() => {
      toast.success('링크가 복사되었습니다!');
    });

    //   return;
    // }

    // window.navigator.share({ title: contents.title, text: contents.text });
    toast.success('링크가 복사되었습니다!');
  };

  const handleKakaoFeedShare = async ({ buttonsTitle }: { buttonsTitle?: string }) => {
    const URL = window.location.href;

    window.Kakao.Share.sendDefault({
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
          title: buttonsTitle || '밈셔너리에서 자세히 알아보기',
          link: {
            mobileWebUrl: URL,
            webUrl: URL,
          },
        },
      ],
      installTalk: true,
    });
  };

  const handleKakaoTemplateShare = (templateId: string) => {
    window.Kakao.Share.sendCustom({
      templateId: templateId,
    });
  };

  /* X(트위터) 공유 */
  const handleXShare = ({ preText = '' }: { preText?: string } = {}) => {
    const URL = window.location.href;
    const { title, text } = contents;

    const formattedPreText = preText ? `${preText}%0A` : '';
    const formattedText = text ? `${text}` : '';

    const shareURL = `https://X.com/intent/tweet?via=밈셔너리&text=${formattedPreText}${title}%0A${formattedText}&url=${encodeURIComponent(URL)}`;
    window.open(shareURL);
  };

  return { handleCopyShare, handleKakaoFeedShare, handleKakaoTemplateShare, handleXShare };
};

export default useShare;
