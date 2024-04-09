// import logo from './logo.svg';
import './App.css';
import Class_NguyenVanThao from './Component/Class_NguyenVanThao';
import Func_JSX_NguyenVanthao from './Component/Func_JSX_NguyenVanthao';

function App() {
  return (
    <section className = "app">
        <h1> demo JSX</h1>
        {/* function Component demo */}

        <Func_JSX_NguyenVanthao />
        <Func_JSX_NguyenVanthao fullName = "Nguyễn Văn Thạo" age = "20" />

        <Class_NguyenVanThao />
        <hr />
        <Class_NguyenVanThao info = "Học ReactJS" time ="11 buổi" />
    </section>
  );
}

export default App;
