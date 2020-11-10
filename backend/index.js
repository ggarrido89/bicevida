const axios = require("axios").default;

const URL = "https://dn8mlk7hdujby.cloudfront.net/interview/insurance/policy";

getData();
async function getData() {
  const res = await axios.get(URL);
  const { workers, has_dental_care, company_percentage } = res.data.policy;

  var total_mount = 0;
  const ratio = company_percentage / 100;

  let client_list = workers.map((client) => {
    const { age, childs } = client;
    var life_care = 0;
    var dental_care = 0;

    if (age <= 65) {
      if (childs) {
        life_care = childs == 1 ? 0.4396 : 0.5599;
        dental_care = childs == 1 && has_dental_care ? 0.195 : 0.248;
      } else {
        life_care = 0.279;
        dental_care = has_dental_care ? 0.12 : 0;
      }
    }
    total_mount += life_care + dental_care;
    return {
      age: age,
      childs: childs,
      life_care: life_care,
      dental_care: dental_care,
    };
  });

  const data = {
    workers: client_list,
    has_dental_care: has_dental_care,
    company_percentage: company_percentage,
    total_mount: total_mount * ratio,
  };
  console.log(data);
  return data;
}
