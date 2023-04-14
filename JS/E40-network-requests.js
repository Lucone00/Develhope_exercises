/* Using async and await ,implement the necessary code to recover the Todos list present
 in the following URL through an http request: link . Subsequently, dynamically create 
 a list of elements <li> containing the Todo title (title property in the collection of 
 objects returned by the Response) and append it to the '.todo-list' element. N.B: The
 Body of the Response contains the Todos list in Json format, use the .json method present
in the response to perform the deserialization. */

const container = document.querySelector("#container");

async function fetchData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = response.json();

    data.forEach((element) => {
      const li = document.createElement("li");
      li.innerText = element.title;
      container.append(li);
    });
  } catch (err) {
    console.error(err);
  }
}

fetchData();
