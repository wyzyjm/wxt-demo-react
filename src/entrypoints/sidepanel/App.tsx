import React, { useState } from 'react';
import './App.css';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="container">
            <header>
                <h1>Side Panel</h1>
            </header>

            <main>
                <div className="card">
                    <h2>欢迎使用</h2>
                    <p>这是一个基于 React 构建的侧边栏。您可以根据需要扩展此页面。</p>
                    <button onClick={() => setCount((c) => c + 1)}>
                        点击交互: {count}
                    </button>
                </div>

                <div className="card">
                    <h2>更多功能</h2>
                    <p>您可以在这里添加设置、工具或其他辅助功能。</p>
                </div>
            </main>
        </div>
    );
}

export default App;
