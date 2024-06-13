import{M as E,f as x,w as P,u as R,e as A}from"./Button-BLpNJ5b7.js";const M={title:"Example/Button",component:E,parameters:{docs:{subtitle:"Displays a standard button"}},argTypes:{size:{control:{type:"select"},options:["small","medium","large"]},backgroundColor:{control:"color"}},args:{onClick:x()}},e={args:{primary:!0,label:"Button"}},r={args:{label:"Button"}},t={args:{size:"large",label:"Button"}},s={args:{size:"small",label:"Button"}},a={args:{size:"small",href:"http://storybook.js.org",children:"Button"},play:async({canvasElement:_})=>{const n=P(_);await R.click(n.getByRole("link")),A(n.getByRole("link")).toHaveAttribute("href","http://storybook.js.org")}},o={args:{size:"small",label:"Button with Controls",href:"http://storybook.js.org"}};var l,c,i,p,m;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    primary: true,
    label: "Button"
  }
}`,...(i=(c=e.parameters)==null?void 0:c.docs)==null?void 0:i.source},description:{story:"Button option with Primary (default) appearance",...(m=(p=e.parameters)==null?void 0:p.docs)==null?void 0:m.description}}};var u,g,d;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: "Button"
  }
}`,...(d=(g=r.parameters)==null?void 0:g.docs)==null?void 0:d.source}}};var y,b,h;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    size: "large",
    label: "Button"
  }
}`,...(h=(b=t.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var B,k,S;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    size: "small",
    label: "Button"
  }
}`,...(S=(k=s.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var f,v,z;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    size: "small",
    href: "http://storybook.js.org",
    children: "Button"
  },
  play: async ({
    canvasElement
  }) => {
    // Assigns canvas to the component root element
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("link"));
    expect(canvas.getByRole("link")).toHaveAttribute("href", "http://storybook.js.org");
  }
}`,...(z=(v=a.parameters)==null?void 0:v.docs)==null?void 0:z.source}}};var j,w,C;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    size: 'small',
    label: "Button with Controls",
    href: "http://storybook.js.org"
  }
}`,...(C=(w=o.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};const O=["Primary","Secondary","Large","Small","WithInteractions","Controls"],H=Object.freeze(Object.defineProperty({__proto__:null,Controls:o,Large:t,Primary:e,Secondary:r,Small:s,WithInteractions:a,__namedExportsOrder:O,default:M},Symbol.toStringTag,{value:"Module"}));export{H as B,o as C,e as P,r as S,a as W};
//# sourceMappingURL=Button.stories-ZF0goECW.js.map
