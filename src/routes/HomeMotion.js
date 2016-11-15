import React from 'react';
import ReactDOM from 'react-dom';
import { scrollScreen } from 'rc-scroll-anim';
import '../less/common.less';
import Nav1 from '../components/Nav';
import Banner0 from '../components/Banner0';
import Content2 from '../components/Content2';
import Content6 from '../components/Content6';
import Footer1 from '../components/Footer';

const props = {
  nav_1_0: {
    style: {
      position: 'absolute',
      height: '64px',
    },
    dataSource: {
      block1: {
        logo: 'http://o7spigzvd.bkt.clouddn.com/goiot-rc3-132x33.white.png',
        menu1: '为什么使用',
        menu2: '特性',
        menu3: '探索',
        menu4: '价格',
      },
    },
  },
  banner_0_10: {
    style: {
      height: '100%',
    },
    dataSource: {
      block1: {
        top: '35%',
        //logo: 'http://o7spigzvd.bkt.clouddn.com/goiot-rc3-800x266-shadow.white.png',
        logo: 'http://o7spigzvd.bkt.clouddn.com/goiot-rc3-800x259-shadow-all.white.png',
        title:'',
        content1: '极速部署，释放你的创造力',
        content2: '大道至简，开启下一代互联网进化',
        button: '控制台',
        bgImg: 'https://zos.alipayobjects.com/rmsportal/gGlUMYGEIvjDOOw.jpg',
      },
    },
  },
  content_2_20: {
    style: {
      height: '100%',
    },
    dataSource: {
      title: {
        title:'使用 GoIoT 来构建你的下一个网络应用？',
        content:'基于强大的 Node-RED 以及蓬勃发展的 npm 生态系统',
      },
      block0: {
        iconImg:'https://zos.alipayobjects.com/rmsportal/xMSBjgxBhKfyMWX.png',
        title:'模块化部署',
        content:'像堆积木一样搭建专属的网络应用，无痛接入第三方组件，轻松游走于硬件、后台服务和UI之间',
      },
      block1: {
        iconImg:'https://zos.alipayobjects.com/rmsportal/ScHBSdwpTkAHZkJ.png',
        title:'互联网资源',
        content:'全网络协议支持，互联网资源轻易获取、高度定制化、快速部署',
      },
      block2: {
        iconImg:'https://zos.alipayobjects.com/rmsportal/NKBELAOuuKbofDD.png',
        title:'丰富的组件',
        content:'除了默认配有齐全的基础逻辑和网络组件，还可以安装第三方组件用于支持更多智能硬件或其他高级功能',
      },
      block3: {
        iconImg:'https://zos.alipayobjects.com/rmsportal/MNdlBNhmDBLuzqp.png',
        title:'移动适配',
        content:'配有移动端友好的UI组件包，快速呈现，实时交互',
      },
      block4: {
        iconImg:'https://zos.alipayobjects.com/rmsportal/UsUmoBRyLvkIQeO.png',
        title:'分布式虚拟化',
        content:'将网络应用部署于分布式的虚拟化容器中，集中控制和管理',
      },
      block5: {
        iconImg:'https://zos.alipayobjects.com/rmsportal/ipwaQLBLflRfUrg.png',
        title:'大数据',
        content:'大数据分析，搜集、订阅有价值的数据，打造你的 Matrix',
      },
    },
  },
  content_6_21: {
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
  footer_1_90: {
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
      <Nav1 key="nav_1_0" name="nav_1_0" {...props.nav_1_0} />,
      <Banner0 key="banner_0_10" name="banner_0_10" {...props.banner_0_10} />,
      <Content2 key="content_2_20" name="content_2_20" {...props.content_2_20} />,
      <Content6 key="content_6_21" name="content_6_21" {...props.content_6_21} />,
      <Footer1 key="footer_1_90" name="footer_1_90" {...props.footer_1_90} />,
    ];
    return (
      <div className="templates-wrapper">
        {children}
      </div>
    );
  }
}
