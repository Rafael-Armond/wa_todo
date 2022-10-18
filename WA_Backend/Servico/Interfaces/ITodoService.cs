using Models.DTOs;
using Models.Entidades;

namespace Servico.Interfaces
{
    public interface ITodoService
    {
        public List<TodoDto>? GetAllTodos();
        public TodoDto? GetTodo(int todoId);
        public Task CreateTodo(TodoDto todoDto);
        public bool EditTodo(int todoId, TodoDto todoDto);
        public bool DeleteTodo(int todoId);
    }
}
