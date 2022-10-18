using Models.Entidades;

namespace Repositorio.Interfaces
{
    public interface ITodoRepositorio
    {
        public List<TODO>? GetAllTodos();
        public TODO? GetTodo(int todoId);
        public Task CreateTodo(TODO todo);
        public bool EditTodo(int todoId, TODO todo);
        public bool DeleteTodo(int todoId);
    }
}
