const oracledb = require("oracledb");
// Set database connection details
const dbConfig = {
  user: "system",
  password: "manager",
  connectString: "localhost:/orcl",
};

const Query = async (sql) => {
  let connection;
  try {
    connection = await oracledb.getConnection(dbConfig);
    const result = await connection.execute(sql);
    await connection.commit();
    return result;
  } catch (error) {
    return (error);
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (error) {
        console.error(error);
      }
    }
  }
};


const Result = async (...Parameters) => {


  let Sql;
  console.log(typeof (Parameters[2]));
  Details = Parameters[2];
  console.log("database");
  console.log(Details);
  // try{
  //   Details = eval(`(${Parameters[2]})`);
  // } catch(err){}
  switch (Parameters[1]) {
    case "Insert":
      Sql = `insert into ${Parameters[0]} values('${Details.orgBy}','${Details.prgCoordinator}','${Details.prgType}','${Details.prgTheme}','${Details.startDate}','${Details.endDate}','${Details.prgDuration}','${Details.num_std}','${Details.num_faculty}','${Details.num_externals}','${Details.num_rsrc_person}','${Details.amount}','${Details.mode_session}','${Details.remarks}','${Details.objective}','${Details.benifits}','${Details.images_url}')`;
      break;
    case "Update":
      Sql = `update ${Parameters[0]} set orgBy = '${Parameters[3].orgBy}',prgCoordinator = '${Parameters[3].prgCoordinator}', prgType = '${Parameters[3].prgType}',prgTheme = '${Parameters[3].prgTheme}',startDate = '${Parameters[3].startDate}',endDate = '${Parameters[3].endDate}',prgDuration = '${Parameters[3].prgDuration}',num_std = '${Parameters[3].num_std}',num_faculty= '${Parameters[3].num_faculty}',num_externals = '${Parameters[3].num_externals}',num_rsrc_person = '${Parameters[3].num_rsrc_person}',amount = '${Parameters[3].amount}',mode_session= '${Parameters[3].mode_session}',remarks = '${Parameters[3].remarks}',objective = '${Parameters[3].objective}',benifits = '${Parameters[3].benifits}',images_url = '${Parameters[3].images_url}' where orgBy = '${Details}'`;
      break;
    case "Delete":
      Sql = `delete from ${Parameters[0]} where orgBy= '${Details}'`;
      break;
    case "Read":

      Sql = `select * from ${Parameters[0]} `;
      if (Details != "All") {
        Sql = `select * from ${Parameters[0]} where orgBy = '${Details}'`;
      }

      break;
    case "Read1":

      Sql = `select * from ${Parameters[0]} `;
      if (Details != "All") {
        Sql = `select * from ${Parameters[0]} where orgBy = '${Details}'`;
      }

      break;
    case "Read2":

      Sql = `select * from ${Parameters[0]} `;
      if (Details != "All") {
        Sql = `select * from ${Parameters[0]} where prgType = '${Details}'`;
      }
      break;
      case "Read4":

      Sql = `select * from ${Parameters[0]} `;
      if (Details != "All") {
        Sql = `select * from ${Parameters[0]} where prgTheme = '${Details}'`;
      }
      break;
    default:
      console.error("Invalid Parameters");
      break;
  }

  console.log(Sql);
  var result = await Query(Sql);
  return result;
};



//------------------register----------------------//




const register = async (...Parameters) => {

  let Sql;
  console.log(typeof (Parameters[2]));
  Details = Parameters[2];

  switch (Parameters[1]) {
    case "Insert":
      Sql = `insert into ${Parameters[0]} values('${Details.name}','${Details.mail}','${Details.password}','${Details.birth}','${Details.phonenumber}')`;
      break;
    case "Update":
      Sql = `update ${Parameters[0]} set name = '${Parameters[3].name}', password = '${Parameters[3].password}' where name = '${Details}'`;
      break;
    case "Delete":
      Sql = `delete from ${Parameters[0]} where name = '${Details}'`;
      break;
    case "Read":

      Sql = `select mail,password from ${Parameters[0]} where mail = '${Details}'`;

      break;
    default:
      console.error("Invalid Parameters");
      break;
  }
  console.log(Sql);
  var result = await Query(Sql);
  return result;
};



// ---------------  Login  ----------------------------------



const Login = async (...Parameters) => {

  let Sql;
  console.log(typeof (Parameters[2]));
  Details = Parameters[2];
  try {
    Details = eval(`(${Parameters[2]})`);
  } catch (err) { }
  switch (Parameters[1]) {
    case "Read":
      Sql = `select mail,password from ${Parameters[0]} `;
      if (Details != "All") {
        Sql = `select * from ${Parameters[0]} where mail = '${Details}'`;
      }
      break;
    default:
      console.error("Invalid Parameters");
      break;
  }
  console.log(Sql);
  var result = await Query(Sql);
  return result;
};

module.exports = {
  Result: Result,
  Login: Login,
  register: register,
}