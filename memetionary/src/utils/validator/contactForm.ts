import Z from '@/utils/validator';

const MIN_CONTENT_NUM = 10;

const ContactForm = Z.object({
  option: new Z().string().min({ num: 1, message: '문의 유형을 선택해주세요.' }),
  email: new Z().email({ message: '올바른 이메일 형식을 입력해주세요.' }),
  title: new Z().min({ num: 1, message: '제목을 입력해주세요.' }),
  content: new Z().min({ num: MIN_CONTENT_NUM, message: `문의 내용을 최소 ${MIN_CONTENT_NUM}자 이상 입력해주세요` }),
});
