import Score from "./Score";


export default function Learner({ name, bio, scores }) {

  let scoreList = scores.map((el, i)=>{ return <Score key={i} {...el} /> })
  
  return  (
    <div>
      <h3>{name}</h3>
      <p>{bio}</p>
      <ul>
        {scoreList}
      </ul>
      </div>
  );
}