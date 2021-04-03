using System;
using System.ComponentModel.DataAnnotations;

namespace TaskList.Domain
{
    public class BaseEntity
    {
        [Key]
        public int Id { get; set; }
        [ScaffoldColumn(false)]
        public DateTime DateCreated { get; set; }
        [ScaffoldColumn(false)]
        public DateTime LastModified { get; set; }
        [ScaffoldColumn(false)]
        public string CreatedById { get; set; }
        [ScaffoldColumn(false)]
        public string ModifiedById { get; set; }
        public bool IsDeleted { get; set; } = false;
    }
}
