using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace Northwind.Shared;

public partial class TravelCompanionContext : DbContext
{
    public TravelCompanionContext()
    {
    }

    public TravelCompanionContext(DbContextOptions<TravelCompanionContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Account> Accounts { get; set; }

    public virtual DbSet<Blog> Blogs { get; set; }

    public virtual DbSet<Category> Categories { get; set; }

    public virtual DbSet<ImageBlog> ImageBlogs { get; set; }

    public virtual DbSet<ImagePlace> ImagePlaces { get; set; }

    public virtual DbSet<Place> Places { get; set; }

    public virtual DbSet<Ward> Wards { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Data Source=.;Initial Catalog=TravelCompanion;Integrated Security=true;Trust Server Certificate=true;");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Account>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Account__3213E83FFE01FEB7");

            entity.Property(e => e.Id).HasDefaultValueSql("(newid())");
        });

        modelBuilder.Entity<Blog>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Blog__3213E83F6A1E52D7");

            entity.Property(e => e.Id).HasDefaultValueSql("(newid())");
        });

        modelBuilder.Entity<Category>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Category__3213E83F518DFC61");

            entity.Property(e => e.Id).HasDefaultValueSql("(newid())");
        });

        modelBuilder.Entity<ImageBlog>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__ImageBlo__3213E83FDD71D32C");

            entity.Property(e => e.Id).HasDefaultValueSql("(newid())");

            entity.HasOne(d => d.Blog).WithMany(p => p.ImageBlogs).HasConstraintName("FK__ImageBlog__blogI__48CFD27E");
        });

        modelBuilder.Entity<ImagePlace>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__ImagePla__3213E83F71C689E5");

            entity.Property(e => e.Id).HasDefaultValueSql("(newid())");

            entity.HasOne(d => d.Place).WithMany(p => p.ImagePlaces).HasConstraintName("FK__ImagePlac__place__4CA06362");
        });

        modelBuilder.Entity<Place>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Place__3213E83FF8190659");

            entity.Property(e => e.Id).HasDefaultValueSql("(newid())");

            entity.HasOne(d => d.Category).WithMany(p => p.Places).HasConstraintName("FK__Place__categoryI__440B1D61");

            entity.HasOne(d => d.Ward).WithMany(p => p.Places).HasConstraintName("FK__Place__wardID__44FF419A");
        });

        modelBuilder.Entity<Ward>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Ward__3213E83F649C4171");

            entity.Property(e => e.Id).HasDefaultValueSql("(newid())");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
