from flask import Flask, jsonify
from flask_cors import CORS
from routes.tarefa_routes import tarefas_bp


def criar_app():
    app = Flask(__name__)
    CORS(app)
    app.register_blueprint(tarefas_bp)

    @app.get("/")
    def inicio():
        return jsonify({
            "mensagem": "API Organiza+ funcionando!",
            "rotas": {
                "consultar_tarefas": "GET /api/tarefas",
                "cadastrar_tarefa": "POST /api/tarefas"
            }
        }), 200

    @app.errorhandler(404)
    def rota_nao_encontrada(_erro):
        return jsonify({"erro": "Rota não encontrada."}), 404

    return app


app = criar_app()

if __name__ == "__main__":
    app.run(debug=True)
