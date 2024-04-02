import {GithubOutlined} from '@ant-design/icons';
import {DefaultFooter} from '@ant-design/pro-layout';
import {PLANET_LINK} from "@/constants";

const Footer: React.FC = () => {
  const defaultMessage = 'Jisoo出品社';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'planet',
          title: '奶泡球球',
          href: PLANET_LINK,
          blankTarget: true,
        },
        {
          key: 'codeNav',
          title: '粉墨登场',
          href: 'https://www.kugou.com/mixsong/89wnncd7.html?share=1',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <><GithubOutlined/> Jisoo GitHub</>,
          href: 'https://github.com/lililizhang12313',
          blankTarget: true,
        },

      ]}
    />
  );
};

export default Footer;
