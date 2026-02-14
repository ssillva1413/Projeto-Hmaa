import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
  user: "postgres",       
  host: "localhost",      
  database: "ouvidoria",  
  password: "P@ss-Saulo", 
});

export async function saveManifestacao(data) {
  try {
    const query = `
      INSERT INTO ouvidoria (nome, tipo, setor, descricao)
      VALUES ($1, $2, $3, $4)
      RETURNING *;
    `;
    const values = [data.nome, data.tipo, data.setor, data.descricao];

    const result = await pool.query(query, values);
    console.log("📌 Manifestação salva:", result.rows[0]);
    return result.rows[0];
  } catch (err) {
    console.error("❌ Erro ao salvar manifestação:", err);
    throw err;
  }
}

