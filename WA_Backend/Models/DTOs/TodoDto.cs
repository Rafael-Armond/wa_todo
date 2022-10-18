namespace Models.DTOs
{
    public class TodoDto
    {
        public int TodoId { get; set; }
        public string? Title { get; set; }
        public string? Description { get; set; }
        public bool? Concluded { get; set; }
        public DateTime RegistrationDate { get; set; }
    }
}
