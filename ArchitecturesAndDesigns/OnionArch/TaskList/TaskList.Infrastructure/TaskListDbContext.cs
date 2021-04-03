using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Http;
using TaskList.Domain.Models;

namespace TaskList.Infrastructure
{
    public class TaskListDbContext : DbContext
    {
        private readonly IHttpContextAccessor _httpContextAccessor;
        
        public TaskListDbContext(DbContextOptions<TaskListDbContext> options, IHttpContextAccessor httpContextAccessor) : base(options)
        {
            _httpContextAccessor = httpContextAccessor;
        }

        public DbSet<TaskItemModel> TaskItems { get; set; }
    }
}
