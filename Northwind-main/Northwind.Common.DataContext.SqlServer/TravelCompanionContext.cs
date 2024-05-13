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

    public virtual DbSet<BlogImage> BlogImages { get; set; }

    public virtual DbSet<Category> Categories { get; set; }

    public virtual DbSet<Place> Places { get; set; }

    public virtual DbSet<PlaceImage> PlaceImages { get; set; }

    public virtual DbSet<ShareContent> ShareContents { get; set; }

    public virtual DbSet<Ward> Wards { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Data Source=.;Initial Catalog=TravelCompanion;Integrated Security=true;Trust Server Certificate=true;");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Account>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Account__3214EC072069757A");

            entity.Property(e => e.Id).HasDefaultValueSql("(newid())");
        });

        modelBuilder.Entity<Blog>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Blog__3214EC0791E21D40");

            entity.Property(e => e.Id).HasDefaultValueSql("(newid())");
        });

        modelBuilder.Entity<BlogImage>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__BlogImag__3214EC07089CE503");

            entity.Property(e => e.Id).HasDefaultValueSql("(newid())");

            entity.HasOne(d => d.Blog).WithMany(p => p.BlogImages).HasConstraintName("FK__BlogImage__BlogI__4BAC3F29");
        });

        modelBuilder.Entity<Category>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Category__3214EC07016167BC");

            entity.Property(e => e.Id).HasDefaultValueSql("(newid())");
        });

        modelBuilder.Entity<Place>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Place__3214EC07170B19DF");

            entity.Property(e => e.Id).HasDefaultValueSql("(newid())");

            entity.HasOne(d => d.Category).WithMany(p => p.Places).HasConstraintName("FK__Place__CategoryI__46E78A0C");

            entity.HasOne(d => d.Ward).WithMany(p => p.Places).HasConstraintName("FK__Place__WardId__47DBAE45");
        });

        modelBuilder.Entity<PlaceImage>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__PlaceIma__3214EC077CD74486");

            entity.Property(e => e.Id).HasDefaultValueSql("(newid())");

            entity.HasOne(d => d.Place).WithMany(p => p.PlaceImages).HasConstraintName("FK__PlaceImag__Place__4F7CD00D");
        });

        modelBuilder.Entity<ShareContent>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__ShareCon__3214EC076DBDE077");

            entity.Property(e => e.Id).HasDefaultValueSql("(newid())");
        });

        modelBuilder.Entity<Ward>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Ward__3214EC07302A9355");

            entity.Property(e => e.Id).HasDefaultValueSql("(newid())");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
