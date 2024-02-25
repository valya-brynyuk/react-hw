import Header from "./components/Header/Header.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import Content from "./components/Content/Content.jsx";
import style from './App.module.css';

function App() {
  return (
    <>
      <Header className={style.header} />
      <Sidebar className={style.sidebar} />
      <Content className={style.content}>
        <>
          <h1>Lorem Ipsum</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare lacus vel sem lobortis, vel aliquam lectus interdum. Quisque bibendum felis et tempus aliquet. Aliquam erat volutpat. Donec a vestibulum nibh. Mauris eros enim, interdum eget sodales hendrerit, posuere porttitor libero. Sed ut sem ante. Nullam a urna augue. Sed euismod ipsum arcu, ac suscipit libero laoreet a. Vivamus rhoncus id dolor quis porttitor. Pellentesque in commodo lorem. Phasellus consequat nibh quis purus porta semper. Maecenas ex velit, hendrerit et eleifend non, faucibus fermentum sem. Duis vel sagittis nibh, eget suscipit mauris. Suspendisse ac rutrum urna, et interdum nunc.
          </p>
          <p>
            Cras tincidunt nunc sit amet sem luctus pulvinar. Vestibulum aliquet convallis risus id vehicula. Nam aliquam massa libero, vel fringilla risus lacinia quis. Mauris varius neque vel purus sollicitudin faucibus. Nunc tempus, ex id gravida facilisis, diam lacus consectetur turpis, at auctor nibh ipsum eget tortor. Duis bibendum varius massa, eget pharetra lectus pulvinar id. Suspendisse ornare et elit dignissim vulputate. Ut a tellus fringilla, interdum massa quis, volutpat ligula. Phasellus tristique imperdiet venenatis.
          </p>
        </>
      </Content>
    </>
  )
}

export default App
