using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace Northwind.Shared;

[Table("BlogImage")]
public partial class BlogImage
{
    [Key]
    public Guid Id { get; set; }

    public string? ImgLink { get; set; }

    public Guid? BlogId { get; set; }

    [ForeignKey("BlogId")]
    [InverseProperty("BlogImages")]
    public virtual Blog? Blog { get; set; }
}
