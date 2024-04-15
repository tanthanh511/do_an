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
    public Guid Id { get; set; }

    [StringLength(500)]
    public string? Name { get; set; }

    public string? Description { get; set; }

    [Column(TypeName = "ntext")]
    public string? Content { get; set; }

    [InverseProperty("Ward")]
    public virtual ICollection<Place> Places { get; } = new List<Place>();
}
