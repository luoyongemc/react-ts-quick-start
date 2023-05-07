// import React from 'react';
// import Class from './components/Class';
// import smallImg from './assets/imgs/5kb.png';
// import bigImg from './assets/imgs/22kb.png';
// import './app.css';
// import './app.less';

// function App() {
//     return (
//         <h2>
//             <Class /> webpack5-react-ts111
//             <img src={smallImg} alt="小于10kb的图片" />
//             <img src={bigImg} alt="大于于10kb的图片" />
//             <div className="smallImg"></div> {/* 小图片背景容器 */}
//             <div className="bigImg"></div> {/* 大图片背景容器 */}
//         </h2>
//     );
// }
// export default App;

// import React, { useState } from 'react';

// function App() {
//     const [count, setCounts] = useState('');
//     const onChange = (e: any) => {
//         setCounts(e.target.value);
//     };
//     return (
//         <>
//             <h2>webpack5+react+ts333</h2>
//             <p>受控组件</p>
//             <input type="text" value={count} onChange={onChange} />
//             <br />
//             <p>非受控组件</p>
//             <input type="text" />
//         </>
//     );
// }
// export default App;

// import { Demo1, Demo2 } from '@/components';

// function App() {
//     return <Demo1 />;
// }
// export default App;

// import React, { lazy, Suspense, useState } from 'react';
// const LazyDemo = lazy(() => import('@/components/LazyDemo')); // 使用import语法配合react的Lazy动态引入资源

// function App() {
//     const [show, setShow] = useState(false);

//     // 点击事件中动态引入css, 设置show为true
//     const onClick = () => {
//         import('./app.css');
//         setShow(true);
//     };
//     return (
//         <>
//             <h2 onClick={onClick}>展示</h2>
//             {/* show为true时加载LazyDemo组件 */}
//             {show && (
//                 <Suspense fallback={null}>
//                     <LazyDemo />
//                 </Suspense>
//             )}
//         </>
//     );
// }
// export default App;

import React, { lazy, Suspense, useState } from 'react';

// prefetch
const PreFetchDemo = lazy(() =>
    import(
        /* webpackChunkName: "PreFetchDemo" */
        /*webpackPrefetch: true*/
        '@/components/PreFetchDemo'
    )
);
// preload
const PreloadDemo = lazy(() =>
    import(
        /* webpackChunkName: "PreloadDemo" */
        /*webpackPreload: true*/
        '@/components/PreloadDemo'
    )
);

function App() {
    const [show, setShow] = useState(false);

    const onClick = () => {
        setShow(true);
    };
    return (
        <>
            <h2 onClick={onClick}>展示</h2>
            {/* show为true时加载组件 */}
            {show && (
                <>
                    <Suspense fallback={null}>
                        <PreloadDemo />
                    </Suspense>
                    <Suspense fallback={null}>
                        <PreFetchDemo />
                    </Suspense>
                </>
            )}
        </>
    );
}
export default App;
