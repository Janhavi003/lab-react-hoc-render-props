import './App.css';
import LikeImagehoc from './components/HOCs/LikeImagehoc';
import LikePosthoc from './components/HOCs/LikePosthoc';
import LikePostRen from './components/RenderProps/LikePostRen';
import LikeImageRen from './components/RenderProps/LikeImageRen';
function App() {
  return (
   <>
      <div>
        <h1>Blogs Post Using HOC</h1>
        <LikeImagehoc/>
        <LikePosthoc/>
        <h1>Blogs Post Using Render</h1>
        <LikeImageRen/>
        <LikePostRen/>
      </div>
   </>
  );
}

export default App;
