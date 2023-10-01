/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/**
 * @param {string} title
 * @returns {import('@docusaurus/plugin-content-docs/src/sidebars/types').SidebarItemHtml}
 */
const unavailable = title => ({
  type: 'html',
  value: title,
  className: 'menu__link menu__link--unavailable',
  defaultStyle: true,
});

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    'welcome',
    'introduction',
    {
      type: 'category',
      label: 'Planet 1',
      collapsible: false,
      items: [        
        'welcome',
        'welcome',
        'welcome',         
      ],
    },
    {
      type: 'category',
      label: 'Loco Maintenance',
      link: {
        type: 'doc',
        id: 'maintenance/index',
      },
      collapsed: true,
      items: [
        'maintenance/battery-care',
        'maintenance/oil'
      ],
    },
    {
      type: 'category',
      label: 'Steam Loco Prep',
      link: {
        type: 'doc',
        id: 'welcome',
      },
      collapsed: true,
      items: [
        'welcome'                 
      ],
    },   
    
  ],
};
module.exports = sidebars;
