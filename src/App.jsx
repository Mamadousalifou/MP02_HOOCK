import { useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Post } from "./components/Post";
//import Counts from "./components/counts";

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      titre: "Amani Kaso",
      description:
        "Voic un exemple de texte qui vient juste remplacer ce texte ici",
      liker: false,
    },
    {
      id: 2,
      titre: "Amani Kaso",
      description:
        "Voic un exemple de texte qui vient juste remplacer ce texte ici",
      liker: false,
    },
    {
      id: 6,
      titre: "Audy mbuyu",
      description:
        "Voic un exemple de texte qui vient juste remplacer ce texte ici",
      liker: false,
    },
    {
      id: 3,
      titre: "Jean Julien",
      description:
        "Voic un exemple de texte qui vient juste remplacer ce texte ici",
      liker: false,
    },
    {
      id: 4,
      titre: "Pierre Simon",
      description:
        "Voic un exemple de texte qui vient juste remplacer ce texte ici",
      liker: false,
    },
  ]);

  const liker = (data) => {
    console.log(data);
    const donneeCopier = [...posts];
    const index = posts.indexOf(data);
    donneeCopier[index] = { ...posts[index], liker: !posts[index].liker };
    setPosts(donneeCopier);
  };

  const EffacerDOnner = (id) => {
    const nouvelPost = posts.filter((p) => p.id != id);
    setPosts(nouvelPost);
  };

  const nombreLiker = posts.filter((p) => p.liker);

  return (
    <>
      <Navbar nombreLiker={nombreLiker.length} />
      {posts.map((post) => (
        <Post data={post} key={post.id} liker={liker} Effacer={EffacerDOnner} />
      ))}
    </>
  );
}

export default App;
