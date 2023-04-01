
import "./App.css";
import Video from "./pages/Video"

function App() {
  return (
    <div className="App">
      <div className="app_videos">
        <Video 
          likes={111}
          menssages={222}
          shares={333}
          name="Dayane"
          description="Brecker o goleiro"
          music= "musica épica"
          url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4"
          
        
        />
        <Video 
          likes={444}
          menssages={555}
          shares={666}
          name="Luan"
          description="Gato Maneiro"
          music= "Clap your hands"
          url="https://firebasestorage.googleapis.com/v0/b/jornada3-a7924.appspot.com/o/bird.mp4?alt=media&token=c683dc6f-f027-43e1-a9ba-43be147e4843"
        
        />



         
      </div>
    </div>
  );
}

export default App;
