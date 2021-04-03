using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TaskList.Domain.Models
{
    public class TaskItemModel : BaseEntity
    {
        [Required]
        [StringLength(255)]
        [Display(Name = "Task Name")]
        public string TaskName { get; set; }
        [Display(Name = "Is completed?")]
        public bool IsCompleted { get; set; } = false;
    }
}
