import React, { useState } from "react";
import {
  Box,
  Grid,
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  IconButton,
} from "@mui/material";
import { useForm, Controller, useFieldArray } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
import styles from "./FormPrincipal.module.scss";

const FormPrincipal = () => {
  const schema = yup.object().shape({
    name: yup.string().required("Este campo es requerido"),
    age: yup
      .number()
      .typeError("Debe ser un número")
      .min(0, "Edad no válida")
      .required("La edad es requerida"),
    rut: yup.string().required("El RUT es requerido"),
    email: yup
      .string()
      .email("Email inválido")
      .required("El email es requerido"),
    phone: yup.string().required("El número de teléfono es requerido"),
    region: yup.string().required("La región es requerida"),
    commune: yup.string().required("La comuna es requerida"),
    income: yup
      .number()
      .typeError("Debe ser un número")
      .required("El ingreso es requerido"),
    dependents: yup
      .array()
      .of(
        yup.object().shape({
          rut: yup.string().required("El RUT del dependiente es requerido"),
          age: yup
            .number()
            .typeError("Debe ser un número")
            .min(0, "Edad no válida")
            .required("La edad del dependiente es requerida"),
        }),
      )
      .nullable(),
    healthInsurance: yup.string().required("Este campo es requerido"),
  });

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    watch,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [hasDependents, setHasDependents] = useState(false);
  const { fields, append, remove } = useFieldArray({
    control,
    name: "dependents",
  });

  const onSubmit = async (data) => {
    try {
      // Enviar 0 si no hay dependientes, o el array si los hay
      const processedData = {
        ...data,
        dependents:
          data.dependents && data.dependents.length > 0 ? data.dependents : 0,
      };

      const response = await fetch(
        "https://isapre-backend-64505245681.southamerica-east1.run.app/clients",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(processedData),
        },
      );

      if (!response.ok) {
        throw new Error("Error al enviar los datos");
      }

      const result = await response.json();
      console.log("Respuesta del servidor:", result);
      toast.success("Datos enviados correctamente");
      reset();
    } catch (e) {
      console.error(e);
      toast.error("Error al enviar los datos");
    }
  };

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
      className={styles.modalBox}
    >
      <h3 id="cotizar" className={styles.title}>
        Formulario de Contacto
      </h3>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Nombres y Apellidos"
            placeholder="Ej: Juan Pérez"
            {...register("name")}
            error={!!errors.name}
            helperText={errors.name?.message}
            sx={{
              "& label.Mui-focused": {
                color: "#24b9cc", // Color del label al enfocar
              },
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderColor: "#24b9cc", // Borde al enfocar
                },
              },
            }}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Edad"
            placeholder="Ej: 30"
            {...register("age")}
            error={!!errors.age}
            helperText={errors.age?.message}
            sx={{
              "& label.Mui-focused": {
                color: "#24b9cc", // Color del label al enfocar
              },
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderColor: "#24b9cc", // Borde al enfocar
                },
              },
            }}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="RUT"
            placeholder="Ej: 12.345.678-9"
            {...register("rut")}
            error={!!errors.rut}
            helperText={errors.rut?.message}
            sx={{
              "& label.Mui-focused": {
                color: "#24b9cc", // Color del label al enfocar
              },
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderColor: "#24b9cc", // Borde al enfocar
                },
              },
            }}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Correo Electrónico"
            placeholder="Ej: nombre@mail.com"
            {...register("email")}
            error={!!errors.email}
            helperText={errors.email?.message}
            sx={{
              "& label.Mui-focused": {
                color: "#24b9cc", // Color del label al enfocar
              },
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderColor: "#24b9cc", // Borde al enfocar
                },
              },
            }}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Teléfono"
            placeholder="Ej: +56912345678"
            {...register("phone")}
            error={!!errors.phone}
            helperText={errors.phone?.message}
            sx={{
              "& label.Mui-focused": {
                color: "#24b9cc", // Color del label al enfocar
              },
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderColor: "#24b9cc", // Borde al enfocar
                },
              },
            }}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Ingreso"
            placeholder="Ej: 1500000"
            {...register("income")}
            error={!!errors.income}
            helperText={errors.income?.message}
            sx={{
              "& label.Mui-focused": {
                color: "#24b9cc", // Color del label al enfocar
              },
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderColor: "#24b9cc", // Borde al enfocar
                },
              },
            }}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Región"
            placeholder="Ej: Metropolitana"
            {...register("region")}
            error={!!errors.region}
            helperText={errors.region?.message}
            sx={{
              "& label.Mui-focused": {
                color: "#24b9cc", // Color del label al enfocar
              },
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderColor: "#24b9cc", // Borde al enfocar
                },
              },
            }}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Comuna"
            placeholder="Ej: Santiago"
            {...register("commune")}
            error={!!errors.commune}
            helperText={errors.commune?.message}
            sx={{
              "& label.Mui-focused": {
                color: "#24b9cc", // Color del label al enfocar
              },
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderColor: "#24b9cc", // Borde al enfocar
                },
              },
            }}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControlLabel
            control={
              <Checkbox
                checked={hasDependents}
                onChange={(e) => {
                  const checked = e.target.checked;
                  setHasDependents(checked);
                  if (checked && fields.length === 0)
                    append({ rut: "", age: "" });
                  if (!checked) {
                    // remove all
                    for (let i = fields.length - 1; i >= 0; i--) remove(i);
                  }
                }}
              />
            }
            label="Cargas"
          />

          {hasDependents && (
            <Box
              sx={{
                "& label.Mui-focused": {
                  color: "#24b9cc", // Color del label al enfocar
                },
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: "#24b9cc", // Borde al enfocar
                  },
                },
              }}
            >
              {fields.map((field, index) => (
                <Grid container spacing={1} key={field.id} sx={{ mb: 1 }}>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      label={`RUT`}
                      placeholder="Ej: 12345678-9"
                      {...register(`dependents.${index}.rut`)}
                      error={!!errors.dependents?.[index]?.rut}
                      helperText={errors.dependents?.[index]?.rut?.message}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      fullWidth
                      label={`Edad`}
                      placeholder="Ej: 17"
                      {...register(`dependents.${index}.age`)}
                      error={!!errors.dependents?.[index]?.age}
                      helperText={errors.dependents?.[index]?.age?.message}
                    />
                  </Grid>
                  <Grid
                    item
                    xs={2}
                    sx={{ display: "flex", alignItems: "center" }}
                  >
                    <IconButton
                      aria-label="remove"
                      onClick={() => remove(index)}
                    >
                      -
                    </IconButton>
                  </Grid>
                </Grid>
              ))}
              <div>
                <button
                  onClick={() => append({ rut: "", age: "" })}
                  className={styles.btnHero}
                  style={{
                    textAlign: "center",
                    marginTop: "10px",
                    width: "100%",
                  }}
                >
                  Agregar Cargas
                </button>
              </div>
            </Box>
          )}
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Previsión de Salud Actual"
            placeholder="Ej: Fonasa, Isapre Colmena..."
            {...register("healthInsurance")}
            error={!!errors.healthInsurance}
            helperText={errors.healthInsurance?.message}
            sx={{
              "& label.Mui-focused": {
                color: "#24b9cc", // Color del label al enfocar
              },
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderColor: "#24b9cc", // Borde al enfocar
                },
              },
            }}
          />
        </Grid>
      </Grid>

      <Box
        sx={{ marginTop: "20px", display: "flex", justifyContent: "center" }}
      >
        <button type="submit" className={styles.btnHero}>
          Enviar
        </button>
      </Box>
    </Box>
  );
};

export default FormPrincipal;
