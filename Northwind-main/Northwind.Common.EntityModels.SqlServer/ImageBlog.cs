using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace Northwind.Shared;

[Table("ImageBlog")]
public partial class ImageBlog
{
    [Key]
    [Column("id")]
    public Guid Id { get; set; }

    [Column("imgLink")]
    [StringLength(4000)]
    public string? ImgLink { get; set; }

    [Column("blogID")]
    public Guid? BlogId { get; set; }

    [ForeignKey("BlogId")]
    [InverseProperty("ImageBlogs")]
    public virtual Blog? Blog { get; set; }
}
