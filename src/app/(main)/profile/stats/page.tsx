import { metadataModule } from '@/server/metadata';
import { translation } from '@/server/translation';
import { isMobileDevice } from '@/utils/server/responsive';

import Client from './Client';

export const generateMetadata = async () => {
  const { t } = await translation('auth');
  return metadataModule.generate({
    description: t('header.desc'),
    title: t('tab.stats'),
    url: '/profile/stats',
  });
};

const Page = async () => {
  const mobile = await isMobileDevice();
  return <Client mobile={mobile} />;
};

export default Page;
