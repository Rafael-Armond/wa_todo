using Models.DTOs;
using Models.Entidades;
using Repositorio.Interfaces;
using Servico.Interfaces;
using Servico.Mapper;

namespace Servico
{
    public class TodoService : ITodoService
    {
        private readonly ITodoRepositorio _todoRepositorio;
        public TodoService(ITodoRepositorio todoRepositorio) {
            _todoRepositorio = todoRepositorio;
        }

        public async Task CreateTodo(TodoDto todoDto)
        {
            await _todoRepositorio.CreateTodo(todoDto.CreateTodo());
        }

        public bool DeleteTodo(int todoId)
        {
            if(_todoRepositorio.DeleteTodo(todoId))
                return true;

            return false;
        }

        public bool EditTodo(int todoId, TodoDto todoDto)
        {
            if(_todoRepositorio.EditTodo(todoId, todoDto.CreateTodo()))
                return true;

            return false;
        }

        public  List<TodoDto> GetAllTodos()
        {
            var allTodos = _todoRepositorio.GetAllTodos();
            
            if(allTodos is null)
                return null;

            var todosDto = new List<TodoDto>();
            foreach(var todo in allTodos)
            {
                todosDto.Add(todo.CreateTodoDto());
            }

            return todosDto;
        }

        public TodoDto? GetTodo(int todoId)
        {
            var todo = _todoRepositorio.GetTodo(todoId);
            if (todo is null)
                return null;

            return todo.CreateTodoDto();
        }
    }
}
