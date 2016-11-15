import React from 'react';
import ReactDOM from 'react-dom';
import { scrollScreen } from 'rc-scroll-anim';
import '../less/common.less';
import Nav1 from '../components/Nav';
import Banner0 from '../components/Banner0';
import Content6 from '../components/Content6';
import Footer1 from '../components/Footer';

const props = {
  // nav_1_22 区域
  nav1: {
    style: {
      height: '64px',
    },
    dataSource: {
      block1: {
        logo:'https://os.alipayobjects.com/rmsportal/mlcYmsRilwraoAe.svg',
        menu1:'导航一',
        menu2:'导航二',
        menu3:'导航三',
        menu4:'导航四',
      },
    },
  },
  // banner_0_23 区域
  banner0: {
    style: {
      height: '100%',
    },
    dataSource: {
      block1: {
        top:'25%',
        logo:'https://zos.alipayobjects.com/rmsportal/HqnZZjBjWRbjyMr.png',
        title:'',
        content:'一个高效的页面动画解决方案',
        button:'Learn More',
        bgImg:'https://zos.alipayobjects.com/rmsportal/gGlUMYGEIvjDOOw.jpg',
      },
    },
  },
  // content_6_26 区域
  content6: {
    style: {
      height: '100%',
    },
    dataSource: {
      title: {
        title:'蚂蚁金融云提供专业的服务',
        content:'科技想象力，金融创造力',
      },
      block0: {
        tag:'PHONE',
        icon:'https://zos.alipayobjects.com/rmsportal/XnzcslQvRoBHMHd.svg',
        contentTitle:'技术\n融合\n开放',
        content:'丰富的技术组件，简单组装即可快速搭建金融级应用，丰富的技术组件，简单组装即可快速搭建金融级应用。\n解放业务及技术生产力，推动金融服务底层创新，推动金融服务底层创新。解放业务及技术生产力，推动金融服务底层创新。\n符合金融及要求的安全可靠、高可用、高性能的服务能力，符合金融及要求的安全可靠、高可用、高性能的服务能力。',
        img:'https://zos.alipayobjects.com/rmsportal/xBrUaDROgtFBRRL.png',
      },
      block1: {
        tag:'TABLET',
        icon:'https://zos.alipayobjects.com/rmsportal/XnzcslQvRoBHMHd.svg',
        contentTitle:'技术\n融合\n开放',
        content:'丰富的技术组件，简单组装即可快速搭建金融级应用，丰富的技术组件，简单组装即可快速搭建金融级应用。\n解放业务及技术生产力，推动金融服务底层创新，推动金融服务底层创新。解放业务及技术生产力，推动金融服务底层创新。\n符合金融及要求的安全可靠、高可用、高性能的服务能力，符合金融及要求的安全可靠、高可用、高性能的服务能力。',
        img:'https://zos.alipayobjects.com/rmsportal/xBrUaDROgtFBRRL.png',
      },
      block2: {
        tag:'DESKTOP',
        icon:'https://zos.alipayobjects.com/rmsportal/XnzcslQvRoBHMHd.svg',
        contentTitle:'技术\n融合\n开放',
        content:'丰富的技术组件，简单组装即可快速搭建金融级应用，丰富的技术组件，简单组装即可快速搭建金融级应用。\n解放业务及技术生产力，推动金融服务底层创新，推动金融服务底层创新。解放业务及技术生产力，推动金融服务底层创新。\n符合金融及要求的安全可靠、高可用、高性能的服务能力，符合金融及要求的安全可靠、高可用、高性能的服务能力。',
        img:'https://zos.alipayobjects.com/rmsportal/xBrUaDROgtFBRRL.png',
      },
    },
  },
  // footer_1_27 区域
  footer1: {
    style: {
      height: '400px',
    },
    dataSource: {
      logo: {
        logo:'https://zos.alipayobjects.com/rmsportal/qqaimmXZVSwAhpL.svg',
        content:'A efficient motion design solutions',
      },
      block1: {
        title:'产品',
        content:'产品更新记录\nAPI文档\n快速入门\n参考指南',
        contentLink:'#\n#\n#\n#',
      },
      block2: {
        title:'关于',
        content:'FAQ\n联系我们',
        contentLink:'#\n#',
      },
      block3: {
        title:'资源',
        content:'Ant Design\nAnt Design Mobile\nAnt Cool\nAntD Library',
        contentLink:'#\n#\n#\n#',
      },
      block4: {
        title:'关注',
        content:'https://zos.alipayobjects.com/rmsportal/IiCDSwhqYwQHLeU.svg\nhttps://zos.alipayobjects.com/rmsportal/AXtqVjTullNabao.svg\nhttps://zos.alipayobjects.com/rmsportal/fhJykUTtceAhYFz.svg\nhttps://zos.alipayobjects.com/rmsportal/IDZTVybHbaKmoEA.svg',
        contentLink:'#\n#\n#\n#',
      },
      copyright: {
        content:'Copyright © 2016 The Project by <a href=\'#\'>Ant Motion</a>. All Rights Reserved',
      },
    },
  },
};

export default class HomeMotion extends React.Component {
  componentDidMount() {
  }

  render() {
    const children = [
      <Nav1 key="nav_1_22" name="nav_1_22" {...props.nav1} />,
      <Banner0 key="banner_0_23" name="banner_0_23" {...props.banner0} />,
      <Content6 key="content_6_26" name="content_6_26" {...props.content6} />,
      <Footer1 key="footer_1_27" name="footer_1_27" {...props.footer1} />,
    ];
    return (
      <div className="templates-wrapper">
        {children}
      </div>
    );
  }
}
