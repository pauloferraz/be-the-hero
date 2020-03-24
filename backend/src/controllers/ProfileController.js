const connection = require("../database/connection");

module.exports = {
  async index(request, response) {
    const ong_id = request.headers.auth;
    const { page = 1 } = request.query;

    const [count] = await connection("incidents").count();

    response.header("X-Total-Count", count["count(*)"]);
    const incidents = await connection("incidents")
      .join("ongs", "ongs.id", "=", "incidents.ong_id")
      .limit(5)
      .offset((page - 1) * 5)
      .where("ong_id", ong_id)
      .select([
        "incidents.*",
        "ongs.name",
        "ongs.email",
        "ongs.whatsapp",
        "ongs.city",
        "ongs.uf"
      ]);

    return response.json(incidents);
  }
};
