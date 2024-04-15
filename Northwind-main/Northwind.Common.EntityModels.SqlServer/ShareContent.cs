using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace Northwind.Shared;

[Table("ShareContent")]
public partial class ShareContent
{
    [Key]
    public Guid Id { get; set; }

    public string? Slogan { get; set; }

    public string? Introduction { get; set; }

    [StringLength(35)]
    public string? Email { get; set; }

    [StringLength(11)]
    [Unicode(false)]
    public string? Phone { get; set; }

    [StringLength(500)]
    public string? Address { get; set; }
}
