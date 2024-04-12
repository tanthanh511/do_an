using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace Northwind.Shared;

[Table("Ward")]
public partial class Ward
{
    [Key]
    [Column("id")]
    public Guid Id { get; set; }

    [Column("ward")]
    [StringLength(1000)]
    public string? Ward1 { get; set; }

    [Column("description")]
    public string? Description { get; set; }

    [Column("content", TypeName = "ntext")]
    public string? Content { get; set; }

    [InverseProperty("Ward")]
    public virtual ICollection<Place> Places { get; } = new List<Place>();
}
