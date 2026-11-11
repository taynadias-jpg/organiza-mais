from pathlib import Path
import os
import sqlite3

PASTA_ATUAL = Path(__file__).resolve().parent
CAMINHO_SCHEMA = PASTA_ATUAL / "schema.sql"

# Na Vercel, a pasta do projeto é somente leitura.
# Por isso, usamos /tmp, que permite gravar o banco durante a execução.
if os.environ.get("VERCEL"):
    CAMINHO_BANCO = Path("/tmp") / "organiza_plus.db"
else:
    CAMINHO_BANCO = PASTA_ATUAL / "organiza_plus.db"


def conectar():
    return sqlite3.connect(CAMINHO_BANCO)


def inicializar_banco():
    with conectar() as conexao:
        sql = CAMINHO_SCHEMA.read_text(encoding="utf-8")
        conexao.executescript(sql)
