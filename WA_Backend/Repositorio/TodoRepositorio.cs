using Microsoft.EntityFrameworkCore;
using Models.Entidades;
using Repositorio.Context;
using Repositorio.Interfaces;

namespace Repositorio
{
    public class TodoRepositorio : ITodoRepositorio
    {
        private readonly AppDbContext _appDbContext;
        public TodoRepositorio(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        public async Task CreateTodo(TODO todo)
        {
            try
            {
                _appDbContext.TODOs?.Add(todo);
                await _appDbContext.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public bool DeleteTodo(int todoId)
        {
            try
            {
                var todo = _appDbContext.TODOs?.FirstOrDefault(todo => todo.TodoId == todoId);
                if(todo is null)
                    return false;

                _appDbContext.TODOs?.Remove(todo);
                _appDbContext.SaveChanges();

                return true;
            }
            catch(Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public bool EditTodo(int todoId, TODO todo)
        {
            if(todoId != todo.TodoId || todo is null)
                return false;

            try
            {
                _appDbContext.Entry(todo).State = EntityState.Modified;
                _appDbContext.SaveChanges();

                return true;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public List<TODO>? GetAllTodos()
        {
            try
            {
                var listTodos = _appDbContext.TODOs?.ToList();

                if (listTodos is null)
                    return null;

                return listTodos;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public TODO? GetTodo(int todoId)
        {
            try
            {
                var todo = _appDbContext.TODOs?.FirstOrDefault(todo => todo.TodoId == todoId);

                if (todo is null)
                    return null;

                return todo;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }
    }
}
