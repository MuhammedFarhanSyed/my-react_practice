export default function Add_todo() {
  return (
    <div class="container text-center">
      <div class="row row-add">
        <div class="col-6"><input type="text" placeholder="Enter your task here .." /></div>
        <div class="col-3"><input type="date" /></div>
        <div class="col-2"><button type="button" class="btn btn-secondary">Add</button></div>
      </div>
    </div>
  );
}
