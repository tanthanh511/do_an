using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace Northwind.Shared;

[Table("Blog")]
public partial class Blog
{
    [Key]
    public Guid Id { get; set; }

    [StringLength(1000)]
    public string? Title { get; set; }

    [StringLength(500)]
    public string? Author { get; set; }

    public string? Description { get; set; }

    [Column(TypeName = "ntext")]
    public string? Content { get; set; }

    [Column(TypeName = "datetime")]
    public DateTime? DateCreated { get; set; }

    [Column(TypeName = "datetime")]
    public DateTime? DateModified { get; set; }

    public int? Status { get; set; }

    [InverseProperty("Blog")]
    public virtual ICollection<BlogImage> BlogImages { get; } = new List<BlogImage>();
}
