import request from "../../utils/request";

export default function CreateComment({
  user,
  gameId,
}) {
  const addCommentActio = async (formData) => {
    const newComment = {
      text: formData.get("text"),
      author: user?.email,
      game_id: gameId,
    };
    try {
      await request(
        "/comments",
        "POST",
        newComment,
      );
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <article className="create-comment">
      <label>Add new comment:</label>
      <form
        className="form"
        action={addCommentActio}
      >
        <textarea
          name="text"
          placeholder="Comment......"
          defaultValue={""}
        />
        <input
          className="btn submit"
          type="submit"
          defaultValue="Add Comment"
        />
      </form>
    </article>
  );
}
