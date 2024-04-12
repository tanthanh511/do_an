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
    [Column("id")]
    public Guid Id { get; set; }

    [Column("title")]
    [StringLength(1000)]
    public string? Title { get; set; }

    [Column("description")]
    public string? Description { get; set; }

    [Column("content", TypeName = "ntext")]
    public string? Content { get; set; }

    [Column("dateCreacted", TypeName = "datetime")]
    public DateTime? DateCreacted { get; set; }

    [Column("dateModified", TypeName = "datetime")]
    public DateTime? DateModified { get; set; }

    [Column("status")]
    public int? Status { get; set; }

    [InverseProperty("Blog")]
    public virtual ICollection<ImageBlog> ImageBlogs { get; } = new List<ImageBlog>();

    [InverseProperty("Place")]
    public virtual ICollection<ImagePlace> ImagePlaces { get; } = new List<ImagePlace>();
}
