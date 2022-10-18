using Microsoft.AspNetCore.Mvc;
using Models.DTOs;
using Servico.Interfaces;

namespace WA_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TODOController : ControllerBase
    {
        private readonly ITodoService _todoService;

        public TODOController(ITodoService todoService)
        {
            _todoService = todoService;
        }

        [HttpGet]
        [Route("getAllTodos")]
        public ActionResult<TodoDto> GetAllToDos()
        {
            var todosList = _todoService.GetAllTodos();

            if(todosList is null)
                return NotFound("Não foi encontrado nenhum ToDo");

            return Ok(todosList);
        }

        [HttpGet]
        [Route("getTodo/{todoId:int}")]
        public ActionResult GetToDo(int todoId)
        {
            var todo = _todoService.GetTodo(todoId);

            if (todo is null)
                return BadRequest("Não foi encontrado nenhum ToDo");

            return Ok(todo);
        }

        [HttpPost]
        [Route("create")]
        public async Task<ActionResult> CreateToDo([FromBody] TodoDto todoDto)
        {
            try 
            {
                await _todoService.CreateTodo(todoDto);
                return Ok("ToDo criado com sucesso");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut]
        [Route("edit/{todoId:int}")]
        public ActionResult EditToDo(int todoId,[FromBody] TodoDto todoDto)
        {
            if (_todoService.EditTodo(todoId, todoDto))
                return Ok("ToDo editado com sucesso");

            return BadRequest("Erro ao editar ToDo");
        }

        [HttpDelete]
        [Route("delete/{todoId:int}")]
        public ActionResult DeleteToDo(int todoId)
        {
            if (_todoService.DeleteTodo(todoId))
                return Ok("ToDo deletado com sucesso");

            return BadRequest("Erro ao deletar ToDo");
        }
    }
}
