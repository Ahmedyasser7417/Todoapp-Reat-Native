import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingBottom: 20,
    width: '100%',
  },
  input: {
    borderWidth: 1,
    borderColor: "#aeaeae",
    width: "80%",
    marginVertical: 10,
    height: 50,
    padding: 10,
    borderRadius: 5,
  },
  submitBtn: {
    width: "50%",
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    borderRadius: 10,
  },
  text: {
    color: "white",
    fontSize: 18,
    textTransform: "uppercase",
  },
  dividerLine: {
    height: 1,
    width: "90%",
    backgroundColor: "#aeaeae",
    marginVertical: 15,
  },
  filterContainer: {
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-between",
  },
  filterBtn: {
    width: "30%",
    backgroundColor: "#ffffff",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "black",
  },
  filterText: {
    color: "black",
    fontSize: 15,
  },
  activeFilterBtn: {
    width: "30%",
    backgroundColor: "black",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "black",
  },
  activeFilterText: {
    color: "white",
    fontSize: 15,
  },
  todosContainer: {
    marginTop: 10,
  },
  doneTodo: {
    textDecorationLine: "line-through",
  },
  todoList: {
    width: "90%",
    marginTop: 16,
  },
  todoItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    borderBottomWidth: 1,
    borderColor: "#eee",
    backgroundColor: "#fff",
  },
  todoContent: {
    flex: 1,
  },
  todoTitle: {
    fontWeight: "bold",
    fontSize: 16,
  },
  todoTitleDone: {
    textDecorationLine: "line-through",
    color: "#888",
  },
  todoDescription: {
    color: "#555",
    marginTop: 4,
  },
  todoDescriptionDone: {
    textDecorationLine: "line-through",
    color: "#888",
  },
  deleteButton: {

    padding: 8,
    borderRadius: 5,
    marginLeft: 10,
  },
  doneButton: {

    padding: 8,
    borderRadius: 5,
    marginLeft: 10,
  },
  deleteButtonText: {
    color: "#fff",
    fontSize: 12,
  },
});
