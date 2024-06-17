import { SignUp } from '@clerk/nextjs';

import { metadataModule } from '@/server/metadata';
import { translation } from '@/server/translation';

export const generateMetadata = async () => {
  const { t } = await translation('clerk');
  return metadataModule.generate({
    description: t('signUp.start.subtitle'),
    title: t('signUp.start.title'),
    url: '/signup',
  });
};

const Page = () => {
  return <SignUp path="/signup" />;
};

Page.displayName = 'SignUp';

export default Page;
