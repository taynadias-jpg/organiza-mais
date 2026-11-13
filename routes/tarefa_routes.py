from datetime import date
from flask import Blueprint, jsonify, request
from daos.tarefa_dao import TarefaDAO
from models.tarefa import Tarefa

tarefas_bp = Blueprint("tarefas", __name__, url_prefix="/api/tarefas")
tarefa_dao = TarefaDAO()

@tarefas_bp.get("")
def listar_tarefas():
    tarefas = tarefa_dao.listar_todas()
    return jsonify([t.para_dicionario() for t in tarefas]), 200

@tarefas_bp.post("")
def cadastrar_tarefa():
    dados = request.get_json(silent=True)
    if not isinstance(dados, dict):
        return jsonify({"erro": "Envie os dados em formato JSON."}), 400

    titulo = str(dados.get("titulo", "")).strip()
    materia = str(dados.get("materia", "")).strip()
    data_entrega = str(dados.get("data_entrega", "")).strip()
    descricao = str(dados.get("descricao", "")).strip()

    if not titulo or not materia or not data_entrega:
        return jsonify({"erro": "Preencha titulo, materia e data_entrega."}), 400
    try:
        date.fromisoformat(data_entrega)
    except ValueError:
        return jsonify({"erro": "Use a data no formato AAAA-MM-DD."}), 400

    tarefa = Tarefa(titulo, materia, data_entrega, descricao)
    salva = tarefa_dao.cadastrar(tarefa)
    return jsonify(salva.para_dicionario()), 201
