using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Models.Entidades
{
    [Table("TODOs")]
    public class TODO
    {
        [Key]
        public int TodoId { get; set; }

        [Required, StringLength(150, ErrorMessage = "Must be between 1 and 150 characters", MinimumLength = 1)]
        public string? Title { get; set; }
        
        [StringLength (240)]
        public string? Description { get; set; }

        [Required]
        public bool? Concluded { get; set;}

        [Required]
        public DateTime RegistrationDate { get; set; }
    }
}
