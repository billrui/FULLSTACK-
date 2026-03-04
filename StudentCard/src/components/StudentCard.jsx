function StudentCard({ name, course, age }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Course: {course}</p>
      <p>Age: {age}</p>
      <hr />
    </div>
  );
}
export default StudentCard;