const UserList = function () {
  return (
    <div className="mt-20">
      <h1 className="text-4xl font-semibold text-center">All Users</h1>

      <table>
        <tr>
          <th>Username</th>
          <th>Email</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>

        <tr>
          <td>shubham</td>
          <td>purwar@35@gmail.com</td>
          <td>Edit</td>
          <td>Delete</td>
        </tr>
      </table>
    </div>
  );
};

export default UserList;
