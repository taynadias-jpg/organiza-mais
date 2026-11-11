from pathlib import Path
import sqlite3

PASTA_ATUAL = Path(__file__).resolve().parent
CAMINHO_BANCO = PASTA_ATUAL / "organiza_plus.db"
CAMINHO_SCHEMA = PASTA_ATUAL / "schema.sql"

def conectar():
    return sqlite3.connect(CAMINHO_BANCO)

def inicializar_banco():
    with conectar() as conexao:
        sql = CAMINHO_SCHEMA.read_text(encoding="utf-8")
        conexao.executescript(sql)
