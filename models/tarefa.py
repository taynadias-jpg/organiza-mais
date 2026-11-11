class Tarefa:
    """Representa uma tarefa escolar."""

    def __init__(self, titulo, materia, data_entrega, descricao="", status="Pendente", id=None):
        self.id = id
        self.titulo = titulo
        self.materia = materia
        self.descricao = descricao
        self.data_entrega = data_entrega
        self.status = status

    def para_dicionario(self):
        """Prepara os dados da tarefa para serem enviados em JSON."""
        return {
            "id": self.id,
            "titulo": self.titulo,
            "materia": self.materia,
            "descricao": self.descricao,
            "data_entrega": self.data_entrega,
            "status": self.status
        }
