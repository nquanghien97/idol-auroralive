'use client'

import React, { useState } from 'react'
import { Button } from '../button';
import { ArrowRight } from 'lucide-react';
import { Card } from '../card';
import { Controller, useForm } from 'react-hook-form';
import { Input } from '../input';
import { CalendarVi } from '../datepicker';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Textarea } from '../textarea';
import { toast } from 'react-toastify';

const formSchema = yup.object({

  fullName: yup.string().required('Họ và tên là bắt buộc'),

  phoneNumber: yup
    .string()
    .matches(/^0\d{9}$/, 'Số điện thoại phải có 10 chữ số và bắt đầu bằng 0')
    .required('Số điện thoại là bắt buộc'),

  dateOfBirth: yup
    .date()
    .max(new Date(), 'Ngày sinh không hợp lệ')
    .required('Ngày sinh là bắt buộc'),

  tiktokLink: yup
    .string()
    .url('Link TikTok không hợp lệ')
    .required('Vui lòng nhập link kênh Tiktok'),

  facebookLink: yup
    .string()
    .url('Link Facebook/Instagram không hợp lệ')
    .required('Vui lòng nhập link Facebook cá nhân'),

  experience: yup
    .string(),

  introduce: yup
    .string()
    .required('Vui lòng giới thiệu bản thân')
});

interface FormValues {
  fullName: string;
  phoneNumber: string;
  dateOfBirth: Date;
  tiktokLink: string;
  facebookLink: string;
  experience?: string;
  introduce: string;
}

function Form() {

  const { register, handleSubmit, control, watch, reset, formState: { errors } } = useForm<FormValues>({
    resolver: yupResolver(formSchema)
  })

  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = async (data: FormValues) => {
    setIsLoading(true)
    try {
      if(!process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL) {
        toast.error('Invalid google url')
        return;
      }
      await fetch(process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: JSON.stringify(data)
      })
      toast.success('Ứng tuyển thành công!')
    } catch (err) {
      toast.error('Có lỗi xảy ra, vui lòng thử lại')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="p-8 border-border bg-card">
      <h3 className="text-3xl lg:text-6xl font-bold mb-2 text-center text-[#1877f2]">HỒ SƠ ỨNG TUYỂN</h3>
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-4 mb-8">
          <div className="flex gap-2 lg:items-center flex-col lg:flex-row mb-8">
            <div className="lg:w-[160px]">
              <p>Họ tên <span className="text-[red]">*</span></p>
            </div>
            <Controller
              control={control}
              name="fullName"
              render={({ field }) => (
                <div className="space-y-1 h-12 w-full">
                  <Input
                    {...field}
                    value={field.value || ''}
                    type="text"
                    placeholder="Họ và tên"
                    className="h-12"
                  />
                  {errors.fullName && (
                    <p className="text-sm text-red-500">{errors.fullName.message}</p>
                  )}
                </div>
              )}
            />
          </div>
          <div className="flex gap-2 lg:items-center flex-col lg:flex-row mb-8">
            <div className="lg:w-[160px]">
              <p>Số điện thoại <span className="text-[red]">*</span></p>
            </div>
            <Controller
              control={control}
              name="phoneNumber"
              render={({ field }) => (
                <div className="space-y-1 h-12 w-full">
                  <Input
                    {...field}
                    value={field.value || ''}
                    type="text"
                    placeholder="Số điện thoại"
                    className="h-12"
                  />
                  {errors.phoneNumber && (
                    <p className="text-sm text-red-500">{errors.phoneNumber.message}</p>
                  )}
                </div>
              )}
            />
          </div>
          <div className="flex gap-2 lg:items-center flex-col lg:flex-row mb-8">
            <div className="lg:w-[160px]">
              <p>Ngày sinh <span className="text-[red]">*</span></p>
            </div>

            <Controller
              name="dateOfBirth"
              control={control}
              defaultValue={new Date()}
              render={({ field }) => (
                <div className="space-y-1 h-12 w-full">
                  <div className="border border-[#e1ddde] rounded-lg w-full">
                    <CalendarVi
                      field={field}
                    />
                  </div>
                  {errors.dateOfBirth && <p className="text-sm text-red-500">{errors.dateOfBirth.message}</p>}
                </div>
              )}
            />
          </div>

          <div className="flex gap-2 lg:items-center flex-col lg:flex-row mb-8">
            <div className="lg:w-[160px]">
              <p>Link tiktok <span className="text-[red]">*</span></p>
            </div>
            <Controller
              control={control}
              name="tiktokLink"
              render={({ field }) => (
                <div className="space-y-1 h-12 w-full">
                  <Input
                    {...field}
                    value={field.value || ''}
                    type="text"
                    placeholder="Link Tiktok"
                    className="h-12"
                  />
                  {errors.tiktokLink && (
                    <p className="text-sm text-red-500">{errors.tiktokLink.message}</p>
                  )}
                </div>
              )}
            />
          </div>

          <div className="flex gap-2 lg:items-center flex-col lg:flex-row mb-8">
            <div className="lg:w-[160px]">
              <p>Link Facebook <span className="text-[red]">*</span></p>
            </div>
            <Controller
              control={control}
              name="facebookLink"
              render={({ field }) => (
                <div className="space-y-1 h-12 w-full">
                  <Input
                    {...field}
                    value={field.value || ''}
                    type="text"
                    placeholder="Link Facebook"
                    className="h-12"
                  />
                  {errors.facebookLink && (
                    <p className="text-sm text-red-500">{errors.facebookLink.message}</p>
                  )}
                </div>
              )}
            />
          </div>

          <div className="flex gap-2 lg:items-center flex-col lg:flex-row mb-8">
            <div className="lg:w-[160px]">
              <p>Kinh nghiệm livestream (nếu có)</p>
            </div>
            <Controller
              control={control}
              name="experience"
              render={({ field }) => (
                <div className="space-y-1 h-12 w-full">
                  <Input
                    {...field}
                    value={field.value || ''}
                    type="text"
                    placeholder="Ví dụ: 1 năm"
                    className="h-12"
                  />
                  {errors.experience && (
                    <p className="text-sm text-red-500">{errors.experience.message}</p>
                  )}
                </div>
              )}
            />
          </div>

          <div className="flex gap-2 lg:items-center flex-col lg:flex-row mb-8">
            <div className="lg:w-[160px]">
              <p>Giới thiệu về bản thân</p>
            </div>
            <Controller
              control={control}
              name="introduce"
              render={({ field }) => (
                <div className="space-y-1 w-full">
                  <Textarea {...field} rows={8} placeholder="Kể cho chúng tôi về bạn, điểm mạnh,sở thích/năng khiếu, mong muốn thu nhập" />
                  {errors.introduce && (
                    <p className="text-sm text-red-500">{errors.introduce.message}</p>
                  )}
                </div>
              )}
            />
          </div>
        </div>


        <Button type="submit" size="lg" className="w-full h-12 bg-primary hover:bg-primary/90 cursor-pointer" disabled={isLoading}>
          {isLoading ? (
            <>
              <div className="w-5 h-5 border-3 border-white border-t-transparent rounded-full animate-spin" />
              <span>Đang gửi...</span>
            </>
          ) : (
            <>
              Gửi đăng ký
              <ArrowRight className="ml-2 h-5 w-5" />
            </>
          )}
        </Button>
      </form>
    </Card >
  )
}

export default Form