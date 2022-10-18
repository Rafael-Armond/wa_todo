using Models.DTOs;
using Models.Entidades;

namespace Servico.Mapper
{
    public static class TodoMapper
    {
        public static TODO CreateTodo(this TodoDto todoDto)
        {
            return new TODO()
            {
                TodoId = todoDto.TodoId,
                Title = todoDto.Title,
                Description = todoDto.Description,
                Concluded = todoDto.Concluded,
                RegistrationDate = todoDto.RegistrationDate
            };
        }

        public static TodoDto CreateTodoDto(this TODO todo)
        {
            return new TodoDto()
            {
                TodoId = todo.TodoId,
                Title = todo.Title,
                Description = todo.Description,
                Concluded = todo.Concluded,
                RegistrationDate = todo.RegistrationDate
            };
        }
    }
}
